import { Client } from '@notionhq/client';

// Get environment variables
const NOTION_API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const NOTION_DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

// Validate environment variables
if (!NOTION_API_KEY) {
  throw new Error('Missing VITE_NOTION_API_KEY environment variable');
}

if (!NOTION_DATABASE_ID) {
  throw new Error('Missing VITE_NOTION_DATABASE_ID environment variable');
}

// Create Notion client singleton
export const notionClient = new Client({ 
  auth: NOTION_API_KEY 
});

export const NOTION_CONFIG = {
  DATABASE_ID: NOTION_DATABASE_ID
} as const;