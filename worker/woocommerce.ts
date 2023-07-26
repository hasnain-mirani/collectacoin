import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://tickets.collectacon.nl/stg_43cc2/wp-json/wc/v3/orders",
  consumerKey: 'ck_49fe13f9ae81669bca995c6a28883b940f471322',
  consumerSecret: 'cs_c6fb3d55f2b37512df94022b1344c4dd71219c22',
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error:any) {
    throw new Error(error);
  }
}