import { NotionBookingData } from '../../types/notion';

export const transformToNotionProperties = (data: NotionBookingData) => {
  const properties: Record<string, any> = {
    Name: {
      title: [
        {
          text: { content: `${data.firstName} ${data.lastName}` }
        }
      ]
    },
    Email: {
      email: data.email
    },
    Phone: {
      rich_text: [
        {
          text: { content: data.phone }
        }
      ]
    },
    Service: {
      select: {
        name: data.service.charAt(0).toUpperCase() + data.service.slice(1)
      }
    },
    Date: {
      date: {
        start: data.date
      }
    },
    Time: {
      rich_text: [
        {
          text: { content: data.time }
        }
      ]
    },
    Address: {
      rich_text: [
        {
          text: { content: `${data.addressLine1}, ${data.city}, ${data.postcode}` }
        }
      ]
    },
    Status: {
      status: {
        name: 'New'
      }
    }
  };

  // Add service-specific properties
  if (data.service === 'oven') {
    properties['Oven Type'] = {
      select: {
        name: getOvenType(data.additionalServices)
      }
    };
  } else {
    properties['Property Details'] = {
      rich_text: [
        {
          text: { content: `${data.bedrooms} bedrooms, ${data.bathrooms} bathrooms` }
        }
      ]
    };
    if (data.frequency) {
      properties['Frequency'] = {
        select: {
          name: data.frequency.charAt(0).toUpperCase() + data.frequency.slice(1)
        }
      };
    }
  }

  // Add notes if present
  if (data.notes) {
    properties['Notes'] = {
      rich_text: [
        {
          text: { content: data.notes }
        }
      ]
    };
  }

  return properties;
};

function getOvenType(additionalServices?: Record<string, boolean>) {
  if (!additionalServices) return 'Not specified';
  if (additionalServices.singleOven) return 'Single Oven';
  if (additionalServices.doubleOven) return 'Double Oven';
  if (additionalServices.rangeOven) return 'Range Oven';
  return 'Not specified';
}