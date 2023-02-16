export default function PageHeader({children}: {children:string}) {
  return (
    <div className="bg-blue pb-10 tablet:pb-12">
      <div className="wrapper page-header flex items-end">
        <div className="inner-wrapper">
          <h1 className="text-pink text-32 tablet:text-48 font-bold leading-tight">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
}
