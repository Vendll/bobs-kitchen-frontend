import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <div
      key={post.title}
      className="flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
    >
      <div className="relative h-48 flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={post.imageUrl}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-bobred">
            <Link href={post.category.href}>
              <a className="hover:underline">{post.category.name}</a>
            </Link>
          </p>
          <Link href={post.href}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{post.description}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0 ">
            <Link href={post.author.href}>
              <a className="relative h-10">
                <span className="sr-only">{post.author.name}</span>
              </a>
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link href={post.author.href}>
                <a className="hover:underline">{post.author.name}</a>
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={post.datetime}>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
