export default function ContactForm({
	children = "Har du frågor eller vill du prata digital handel med oss?",
	name,
	company = true,
}: {
	children?: React.ReactNode;
	name: string;
	company?: boolean;
}) {
	return (
		<div className="bg-pink">
			<div className="wrapper py-20">
				<div className="inner-wrapper flex flex-col tablet-lg:flex-row justify-between items-start">
					<div className="mb-8 tablet-lg:mb-0 tablet-lg:w-1/2">
						<span className="text-blue text-12 uppercase">Kontakta oss</span>
						<h3 id="contact" className="text-blue text-32">
							{children}
						</h3>
					</div>
					<div className="w-full flex flex-col tablet-lg:w-2/5">
						{/* Netlify forms, remeber to create a static html form for every form used (in "/public/forms") */}
						<form name={name} method="POST" action="/form-thank-you/">
							<input type="hidden" name="form-name" value={name} />
							<input name="Namn" className="text-input mb-3" type="text" placeholder="Namn*" />
							{company && <input name="Företag" className="text-input mb-3" type="text" placeholder="Företag" />}
							<input name="Epost" className="text-input mb-3" type="email" placeholder="E-post*" />
							<textarea name="Meddelande" className="textarea mb-5" placeholder="Meddelande"></textarea>
							<button type="submit" className="btn-blue self-center tablet-lg:self-start">
								Skicka
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
