import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Boost your conversion rate",
      href: "/blog/a",
      category: { name: "Article", href: "/blog/a" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl: "/image1/image00005.jpeg",
      readingTime: "6 min",
      author: {
        name: "Roel Aufderehar",
        href: "/blog/a",
        imageUrl: "/image1/image00005.jpeg",
      },
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "/blog/a",
      category: { name: "Video", href: "/blog/a" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl: "/image1/image00005.jpeg",
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "/blog/a",
        imageUrl: "/image1/image00005.jpeg",
      },
    },
    {
      title: "Improve your customer experience",
      href: "/blog/a",
      category: { name: "Case Study", href: "/blog/a" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl: "/image1/image00005.jpeg",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "/blog/a",
        imageUrl: "/image1/image00005.jpeg",
      },
    },
    {
      title: "Improve your customer experience",
      href: "/blog/a",
      category: { name: "Case Study", href: "/blog/a" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl: "/image1/image00005.jpeg",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "/blog/a",
        imageUrl: "/image1/image00005.jpeg",
      },
    },
    {
      title: "Improve your customer experience",
      href: "/blog/a",
      category: { name: "Case Study", href: "/blog/a" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl: "/image1/image00005.jpeg",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "/blog/a",
        imageUrl: "/image1/image00005.jpeg",
      },
    },
    {
      title: "Improve your customer experience",
      href: "/blog/a",
      category: { name: "Case Study", href: "/blog/a" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl: "/image1/image00005.jpeg",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "/blog/a",
        imageUrl: "/image1/image00005.jpeg",
      },
    },
  ];

  return (
    <Layout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight mt-12 font-extrabold text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
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
                    <p className="text-sm font-medium text-indigo-600">
                      <Link href={post.category.href}>
                        <a className="hover:underline">{post.category.name}</a>
                      </Link>
                    </p>
                    <Link href={post.href}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
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
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
