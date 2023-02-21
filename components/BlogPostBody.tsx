export default function BlogPostBody({
  children,
  author,
  title,
  date,
}: {
  children: React.ReactNode;
  author?: string;
  title: string;
  date?: string;
}) {
  return (
    <div className="wrapper pb-12">
      <div className="inner-wrapper text-center pt-12">
        {/* Författare */}
        <span className="block text-16 text-black font-bold mb-3">
          {author}
        </span>

        {/* Datum */}
        {date && (
          <span className="block text-12 text-gray uppercase mb-2">{date}</span>
        )}

        {/* Rubrik */}
        <h1 className="text-blue text-32 tablet-lg:text-48 leading-tight mb-10">
          {title}
        </h1>
      </div>

      {/* Body */}
      <div className="laptop:w-10/12 desktop:w-8/12 mx-auto pb-16">
        <div className="wysiwyg">{children}</div>
      </div>
    </div>
  );
}
