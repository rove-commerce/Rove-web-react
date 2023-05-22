import Link from "next/link";

export default function Jumbotron() {
	return (
		<div className="bg-blue">
			<div className="wrapper py-24 tablet:py-32">
				<div className="inner-wrapper">
					<h1 className="text-white text-32 tablet:text-36 max-w-5xl leading-snug">
						<span className="font-bold border-b-2 border-red">Rove</span> hjälper företag att bli framgångsrika i sin digitala affär genom e-handel
						och lead generation
					</h1>
					<div className="inline-flex mt-8 flex-col tablet:flex-row">
						<Link href="/tjanster" className="btn-white inline-block">
							Tjänster
						</Link>
						<Link href="/jobb" className="btn-outline inline-block mt-4 tablet:mt-0 tablet:ml-4">
							Bli en av oss
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
