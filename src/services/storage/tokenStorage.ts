import * as SecureStore from "expo-secure-store"

export const tokenStorage = {

  async getAccessToken() {

    return SecureStore.getItemAsync("accessToken")

  },

  async getRefreshToken() {

    return SecureStore.getItemAsync("refreshToken")

  },

  async setTokens(
    accessToken: string,
    refreshToken: string
  ) {

    await SecureStore.setItemAsync(
      "accessToken",
      accessToken
    )

    await SecureStore.setItemAsync(
      "refreshToken",
      refreshToken
    )

  },

  async clearTokens() {

    await SecureStore.deleteItemAsync("accessToken")

    await SecureStore.deleteItemAsync("refreshToken")

  }

}