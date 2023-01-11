import "./Home.css";
import ImagePlaceholder from "../assets/ImagePlaceholder";
function Home() {
	return (
		<div className="home-container">
			<div className="flex-row blue-gradient">
				<ImagePlaceholder width="100%" />
				<div className="flex-column title-panel">
					<h1 className="text-dark-blue">
						Join the Aisha Comfortable Coliving Community
					</h1>
					<h3 className="text-pink">
						Safe, Comfortable, and Community Oriented
					</h3>
					<p>
						Aisha Comfortable Coliving is a platform that works to empower women
						by matching like-minded women to colive in a safe and enjoyable
						space. We strive to build an inclusive, supportive, and fun
						community for all women.
					</p>
					<div className="flex-row">
						<button className="background-pink ">
							<strong> Tenant </strong>
						</button>
						<button className="background-dark-blue">
							<strong> Homeowner </strong>
						</button>
					</div>
				</div>
			</div>
			<h2 className="banner text-dark-blue background-light-blue align-center">
				Why Coliving?
			</h2>
			<h3 className="banner text-dark-blue background-light-blue align-center">
				Coliving is the new way of wellness living
			</h3>

			<div className="margin-height-4" />
			<div className="infographic flex-row text-white">
				<div className="margin-width-8" />
				<div className="infobox infographic-pink">
					<h4>Social Support</h4>
					<div className="margin-height-8" />
					<h5>
						Living in a safe and inclusive community enables you to enjoy a
						higher standard of living with mental and emotional support.
					</h5>
				</div>
				<div className="infobox infographic-navy">
					<h4>Money Saving</h4>
					<div className="margin-height-8" />
					<h5>
						Coliving enables you to have more economic security, time and
						freedom to enjoy all the good things life has to offer.
					</h5>
				</div>
				<div className="infobox infographic-light-blue">
					<h4>Sustainable Living</h4>
					<div className="margin-height-8" />
					<h5>
						Sharing rescources reduces consumption and carbon emissions.
						Coliving provides socially responsible and sustainable development.
					</h5>
				</div>
				<div className="infobox infographic-blue">
					<h4>Network Building</h4>
					<div className="margin-height-8" />
					<h5>
						Community is at the heart of coliving. Coliving helps you make new
						friends, network, and establish connections that help you grow.
					</h5>
				</div>
			</div>

			<object className="flex-column" data="coliving explanation" type="video">
				<h3 className="text-light-blue align-center">
					<div className="video1-explanation">
						Watch this short video to hear <b>Wendy and Innes</b> talk about how
						they began <b>coliving</b> and how their lives have changed since.
					</div>
				</h3>
				<div className="flex-row">
					<div className="margin-width-16" />
					<ImagePlaceholder width="98%" height="40vh" />
					<div className="margin-width-16" />
				</div>
			</object>

			<h2 className="banner text-white background-pink align-center">
				Testimonials
			</h2>
			<h3 className="banner text-white background-pink align-center">
				See what women have shared about their coliving experiences
			</h3>

			<div className="margin-height-4" />
			<div className="flex-row">
				<div className="margin-width-8" />
				<div className="flex-column">
					<h3 className="text-red align-center">Kathleen & Laura</h3>
					<ImagePlaceholder width="20vw" height="30vh" />
				</div>

				<div className="margin-width-4" />

				<div className="flex-column">
					<h3 className="testimonial">
						<div>
							Hear what <b>Kathleen</b> has to say about her coliving experience
							with <b>Laura</b>
						</div>
					</h3>
					<div className="margin-height-4" />

					<div className="flex-row">
						<div className="margin-width-16"></div>
						<div className="margin-height-8"></div>
						<ImagePlaceholder width="100%" height="100%" />
						<div className="margin-width-16"></div>
					</div>
				</div>
			</div>

			<div className="margin-height-4" />

			<div className="flex-row background-red">
				<div className="margin-width-8" />
				<div className="flex-column">
					<div className="margin-height-4" />
					<h3 className="text-white align-center">
						Read about Kathryn's experience coliving <br />
						with her housemates, Jaspreet and Misha:
					</h3>
					<ImagePlaceholder width="" height="15vh" />
					<h4 className="text-white align-center">
						click <u>here</u> to read the full testimonial
					</h4>
				</div>
				<div className="margin-width-8" />

				<div className="flex-column">
					<h3 className="text-white align-center">
						Kathryn
						<div className="margin-width-16" />
					</h3>
					<ImagePlaceholder width="25vw" height="30vh" />
					<div className="margin-height-4" />
				</div>
				<div className="margin-width-8" />
			</div>

			<h2 className="banner align-center text-dark-blue">
				Why Aisha Comfortable Coliving?
			</h2>

			<div className="background-light-blue">
				<div className="margin-height-4" />
				<div className="infographic flex-row text-white">
					<div className="margin-width-16" />
					<div className="infobox infographic-blue">
						<h5>Personalized Housing Service</h5>
						<div className="margin-height-8" />
						<h6>
							We are a digital platform that matches tenants and women
							homeowners, based on shared lifestyles and needs. Our platform
							allows compatible women to connect in a comfortable, shared living
							space. Property owners are also welcome to use our services to
							find female tenants.
						</h6>
					</div>
					<div className="infobox infographic-pink">
						<h5>Community Driven</h5>
						<div className="margin-height-8" />
						<h6>
							We host regular online community-building events designed around
							health, fitness, culture, and fun. By joining our platform, you
							can enjoy positive bonding experiences with Aisha Community
							members. We believe every woman should feel included and welcome.
						</h6>
					</div>
					<div className="infobox infographic-blue">
						<h5>Your safety is our top priority</h5>
						<div className="margin-height-8" />
						<h6>
							We perform thorough background checks on all housemates to ensure
							a safe living enviroment. We also aim to increase community spirit
							and belongingness through events, activities, and meetups. While
							doing so, we prioritize safety in homes and the community.
						</h6>
					</div>
				</div>
				<div className="margin-height-4" />
			</div>

			<div className="flex-column banner">
				<h2 className="text-pink align-center">How it Works</h2>
				<h3 className="text-dark-blue align-center">
					Just a few steps to get started
				</h3>
			</div>

			<div className="banner background-light-blue flex-row">
				<div className="infographic flex-row text-dark-blue">
					<div className="infobox_wide">
						<h3>Find a Property</h3>
						<div className="margin-height-8" />

						<h4 className="text-dark">
							Browse through available listings to find a property that fit your
							lifestyle.
						</h4>
					</div>
					<div className="infobox_wide">
						<h3>Meet Housemates</h3>
						<div className="margin-height-8" />
						<h4 className="text-dark">
							Attend a Zoom meeting with all housemates to get to know one
							another.
						</h4>
					</div>
					<div className="infobox_wide">
						<h3>Finalize the Details</h3>
						<div className="margin-height-8" />
						<h4 className="text-dark">
							Sign the lease agreement once all parties are satisfied
						</h4>
					</div>
				</div>
			</div>

			<div className="flex-column">
				<div className="margin-height-4" />
				<div className="flex-row">
					<div className="margin-width-8" />
					<h5>
						For a more in-depth explanation of how Aisha Comfortable Coliving
						works as a tenant, woman homeowner, or property owner:
					</h5>
					<div className="margin-width-8" />
				</div>

				<div className="flex-row">
					<div className="margin-width-256" />
					<button className="background-pink text-white">
						<b>Learn More</b>
					</button>
					<div className="margin-width-256" />
				</div>
			</div>

			<h2 className="banner text-white background-red align-center">
				Partner With Us
			</h2>

			<h3 className="align-center text-dark">
				<div className="margin-height-4" />
				Become an Aisha partner to take advantage of our unique rental services.
				<div className="flex-row">
					<div className="margin-width-8" />

					<div className="flex-column">
						<div className="margin-height-4" />
						<h4 className="align-left">
							Are you a management company of a multi-unit <br />
							property or commercial building? At Aisha <br />
							Comfortable Coliving, we know how stressful the process <br />
							of finding the right tenants for your space <br />
							can be. Partner with us today to take full advantage <br />
							of the services we offer our clients, to make the <br />
							rental journey much smoother for everyone involved. <br />
							<br />
							If you would like to know more, have questions <br />
							about our partnership process, or are ready to <br />
							become a partner: <br />
							<br />
							Contact us at <em>aisha@comfortablecoliving.com</em>
						</h4>
					</div>
					<ImagePlaceholder width="40vw" height="30vh" />
				</div>
			</h3>

			<h2 className="banner background-pink text-white align-center">
				Tenants
			</h2>

			<div className="flex-row">
				<div className="margin-width-8" />
				<div className="flex-column">
					<div className="margin-height-4" />
					<h2 className="text-pink">Independence with companionship</h2>
					<h5>
						To all women looking for safe and affordable living, we have you
						covered! <br />
						Share a modern coliving space with a compatible individual matched
						to you. <br />
						<br />
						Coliving provides the ideal wellness living opportunity to enjoy
						life in the <br />
						company of like-minded women in addition to the benefits of a peer
						group <br />
						that takes you places. <br />
						<br />
						Being independent does not mean being alone. <br />
					</h5>

					<div className="flex-row">
						<div className="margin-width-16" />
						<button className="background-red text-white">
							<b>Learn More</b>
						</button>
						<div className="margin-width-16" />
					</div>
				</div>

				<div className="flex-column">
					<div className="margin-height-4" />
					<ImagePlaceholder width="40vw" height="30vh" />
				</div>
				<div className="margin-width-4" />
			</div>

			<h2 className="banner text-dark-blue background-light-blue align-center">
				Homeowners
			</h2>

			<div className="flex-row">
				<div className="margin-width-12" />
				<div className="flex-column">
					<h3 className="align-center">
						Are you looking to rent an <br />
						income property to women? <br />
					</h3>
					<h4 className="banner background-blue text-white align-center">
						Property Owners
					</h4>
					<ImagePlaceholder width="30vw" height="30vw" />

					<h5>
						Women have proven to be the best renters. They <br />
						ensure reliable payments and take care of your <br />
						residence as if you were living there. <br />
						<br />
						We are here to help your investment grow by <br />
						providing carefully selected renters that you can <br />
						count on to maintain your property. <br />
					</h5>
					<button className="background-dark-blue text-white">
						<b>Learn More</b>
					</button>
				</div>
				<div className="margin-width-10" />
				<div className="flex-column">
					<h3 className="align-center">
						Are you a woman homeowner <br />
						interested in coliving? <br />
					</h3>
					<h4 className="banner background-blue text-white align-center">
						Women Homeowners
					</h4>
					<ImagePlaceholder width="30vw" height="30vw" />

					<h5>
						Women have proven to be the best renters. They <br />
						ensure reliable payments and take care of your <br />
						residence as if you were living there. <br />
						<br />
						We are here to help your investment grow by <br />
						providing carefully selected renters that you can <br />
						count on to maintain your property. <br />
					</h5>
					<button className="background-dark-blue text-white">
						<b>Learn More</b>
					</button>
				</div>
				<div className="margin-width-12" />
			</div>

			<h2 className="banner background-blue text-white align-center">
				Community Events <br />
				<h3>Welcome to our Community</h3>
			</h2>

			<div></div>

			<h2 className="flex-row text-red background-light-pink">
				<div className="margin-width-8" />
				<div className="flex-column">
					<div className="margin-height-4" />
					<b>Check out our Blog</b>
					<br />
					<h3>
						See whats happening in the Aisha <br />
						Community and Blog
					</h3>
					<div></div>
				</div>
			</h2>

			<div className="banner background-blue">
				<h2 className="align-center text-dark-blue">Your Discovery Call</h2>
				<h3 className="text-white align-center">
					Your Partner in Wellness Living!
				</h3>
				<h4 className="text-white align-center">
					<br />
					Discover how Aisha Comfortable Coliving can best serve you
					individudally. <br />
					Have all your questions answered and let us help you live your dream.{" "}
					<br />
				</h4>
			</div>
		</div>
	);
}

export default Home;
