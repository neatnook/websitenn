import { notionClient, NOTION_CONFIG } from '../../config/notion';
import { NotionBookingData, NotionResponse } from '../../types/notion';
import { transformToNotionProperties } from './transformers';
import { validateBookingData } from './validation';

export const createBooking = async (data: NotionBookingData): Promise<NotionResponse> => {
  try {
    // Validate data
    const validationError = validateBookingData(data);
    if (validationError) {
      return {
        success: false,
        error: validationError
      };
    }

    // Transform data to Notion properties format
    const properties = transformToNotionProperties(data);

    // Create page in Notion
    const response = await notionClient.pages.create({
      parent: { 
        database_id: NOTION_CONFIG.DATABASE_ID,
        type: 'database_id'
      },
      properties
    });

    if (!response || !response.id) {
      throw new Error('Failed to create Notion page');
    }

    return {
      success: true,
      pageId: response.id
    };

  } catch (error) {
    console.error('Error creating Notion booking:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create booking'
    };
  }
};