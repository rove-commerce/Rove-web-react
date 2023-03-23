import Link from "next/link";
import ReadLink from "./ReadLink";

export default function BlogSummary() {
	return (
		<div className="bg-pink py-20">
			<div className="wrapper">
				<div className="inner-wrapper">
					<div>
						{/* Promoted blog post */}
						<span className="block text-blue text-12 uppercase mb-2">Blogg</span>
						<Link href="/blogg/upphandla-ehandelsprojekt/">
							<div className="text-blue text-20 leading-normal mb-4 laptop:text-32">
								Ska du upphandla ett e-handelsprojekt? <br />
								De vanligaste problemen och viktigt att tänka på.
							</div>
						</Link>
						<ReadLink href="/blogg/upphandla-ehandelsprojekt/" />

						{/* 3 blog posts */}
						{/* First post */}
						<div className="flex flex-col laptop:flex-row pt-6">
							<div className="laptop:w-1/3 py-6 laptop:px-4 border-t laptop:border-l laptop:border-t-0 border-blue">
								<span className="block text-blue text-12 uppercase mb-2">Blogg</span>
								<Link href="/blogg/punchout/">
									<h3 className="text-blue text-20 leading-normal mb-4">PunchOut e-handel - öppna en ny försäljningskanal till era kunder</h3>
								</Link>
								<ReadLink href="/blogg/punchout/" />
							</div>

							{/* Second post */}
							<div className="laptop:w-1/3 py-6 laptop:px-4 border-t laptop:border-l laptop:border-t-0 border-blue laptop:ml-4">
								<span className="block text-blue text-12 uppercase mb-2">Blogg</span>
								<Link href="/blogg/kanalkonflikter/">
									<h3 className="text-blue text-20 leading-normal mb-4">Sälja direkt och kanalkonflikter</h3>
								</Link>
								<ReadLink href="/blogg/kanalkonflikter/" />
							</div>

							{/* Third post */}
							<div className="laptop:w-1/3 py-6 laptop:px-4 border-t laptop:border-l laptop:border-t-0 border-blue laptop:ml-4">
								<span className="block text-blue text-12 uppercase mb-2">Blogg</span>
								<Link href="/blogg/organisation-ehandel-b2b-2/">
									<h3 className="text-blue text-20 leading-normal mb-4">Del 2 - Vilken organisation behövs för en B2B e-handel?</h3>
								</Link>
								<ReadLink href="/blogg/organisation-ehandel-b2b-2/" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
