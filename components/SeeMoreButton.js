import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

export default function SeeMoreButton() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        const query = parseInt(router.query.page) || 1;
        router.push({
          pathname: router.pathname,
          query: {
            page: query + 1,
          },
        });
      }}
    >
      See more
    </div>
  );
}
