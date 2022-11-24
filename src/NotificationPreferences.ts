import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

import { UpdatePreferencesByCategoryParams, UpdateMultiplePreferencesParams, UpdatePreferenceParams } from '../types/params';
  
export class NotificationPreferences extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async listPreferences(user_id: string, communication_channel_id: string, body?: any): Promise<any[]> {
    const endpoint = `/api/v1/users/${user_id}/communication_channels/${communication_channel_id}/notification_preferences`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async listOfPreferenceCategories(user_id: string, communication_channel_id: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/communication_channels/${communication_channel_id}/notification_preference_categories`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getPreference(user_id: string, communication_channel_id: string, notification: string, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/${user_id}/communication_channels/${communication_channel_id}/notification_preferences/${notification}`;
    const url = new URL(endpoint, this.configuration.domain);
    
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePreference(communication_channel_id: string, notification: string, params?: UpdatePreferenceParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/communication_channels/${communication_channel_id}/notification_preferences/${notification}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updatePreferencesByCategory(communication_channel_id: string, category: string, params?: UpdatePreferencesByCategoryParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/communication_channels/${communication_channel_id}/notification_preference_categories/${category}`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async updateMultiplePreferences(communication_channel_id: string, params?: UpdateMultiplePreferencesParams, body?: any): Promise<any> {
    const endpoint = `/api/v1/users/self/communication_channels/${communication_channel_id}/notification_preferences`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

}
