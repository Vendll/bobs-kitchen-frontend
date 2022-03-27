import Layout from "../../components/Layout";
import BlogList from "../../components/BlogList";

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
      <BlogList posts={posts} />
    </Layout>
  );
}
