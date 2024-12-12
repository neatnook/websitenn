import { Client } from '@notionhq/client';
import { NOTION_CONFIG } from '../config/constants';

const notion = new Client({ auth: NOTION_CONFIG.API_KEY });

export const createNotionBooking = async (formData: any) => {
  try {
    const properties = {
      Name: {
        title: [{ text: { content: `${formData.firstName} ${formData.lastName}` } }]
      },
      Email: { email: formData.email },
      Phone: { phone_number: formData.phone },
      Service: { select: { name: formData.service } },
      Date: { date: { start: formData.date } },
      Time: { rich_text: [{ text: { content: formData.time } }] },
      Status: { status: { name: 'New' } },
      Address: {
        rich_text: [{
          text: { content: `${formData.addressLine1}, ${formData.city}, ${formData.postcode}` }
        }]
      }
    };

    // Add service-specific properties
    if (formData.service === 'oven') {
      properties['Oven Type'] = {
        select: {
          name: getOvenType(formData.additionalServices)
        }
      };
    } else {
      properties['Frequency'] = {
        select: { name: formData.frequency || 'One-time' }
      };
      properties['Property Details'] = {
        rich_text: [{
          text: { content: `Bedrooms: ${formData.bedrooms}, Bathrooms: ${formData.bathrooms}` }
        }]
      };
    }

    if (formData.notes) {
      properties['Notes'] = {
        rich_text: [{ text: { content: formData.notes } }]
      };
    }

    const response = await notion.pages.create({
      parent: { database_id: NOTION_CONFIG.DATABASE_ID },
      properties
    });

    return response.id ? true : false;
  } catch (error) {
    console.error('Error creating Notion booking:', error);
    return false;
  }
};

function getOvenType(additionalServices: any) {
  if (additionalServices?.singleOven) return 'Single Oven';
  if (additionalServices?.doubleOven) return 'Double Oven';
  if (additionalServices?.rangeOven) return 'Range Oven';
  return 'Not specified';
}