import { getImages } from './getImages';
import getLogo from './getLogo';
import { getProducts } from './getProducts';

export default function initCustomFetch() {
  (() => {
    window.fetch = async (input: RequestInfo | URL, _params?: RequestInit): Promise<Response> => {
      const url = input instanceof Request ? input.url : input.toString();
      const urlObj = new URL(url, window.location.origin);
      const queryParams: Record<string, string> = Object.fromEntries(urlObj.searchParams.entries());

      switch (urlObj.pathname) {
        case '/logo': {
          const logo = getLogo();
          return new Response(JSON.stringify(logo), {
            headers: { 'Content-Type': 'application/json' }
          });
        }

        case '/images': {
          const { productId = '' } = queryParams;
          const image = getImages(productId);
          return new Response(JSON.stringify(image), {
            headers: { 'Content-Type': 'application/json' }
          });
        }

        case '/products': {
          const { productId = '' } = queryParams;
          const products = getProducts(productId);
          return new Response(JSON.stringify(products), {
            headers: { 'Content-Type': 'application/json' }
          });
        }

        default:
          return new Response(JSON.stringify({ message: 'Wrong url' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          });
      }
    };
  })();
}
