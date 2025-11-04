// import { HomePosts } from "@/component/Home/HomePosts";
import { getHomePosts } from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server-client";
import Link from "next/link";

export const revalidate = 600;

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await getHomePosts(supabase)

  return (
    <>
      <div className="px-4">

        <h2 className="m-4 text-center capitalize font-bold text-3xl text-black">posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">

          {data &&
            data.map(({ id, slug, title, content, image, users }) => (
              <Link
                href={`/${slug}`}
                key={id}
                className="block border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-transform bg-white"
              >
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2 capitalize text-center ">{title}</h2>
                </div>

                {image && (
                  <div className="w-full h-76 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                )}

                <div className="p-4">

                  <p className="text-sm text-gray-700 line-clamp-3 mb-3">
                    {content}
                  </p>
                  <div className="text-right text-sm text-gray-500 capitalize">
                    - by "{users.username}"
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}