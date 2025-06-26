import * as contentstack from "contentstack";

const Stack = contentstack.Stack({
  api_key: process.env.NEXT_PUBLIC_CS_API_KEY,
  delivery_token: process.env.NEXT_PUBLIC_CS_DELIVERY_TOKEN,
  environment: process.env.NEXT_PUBLIC_CS_ENVIRONMENT,
});

export default Stack;
