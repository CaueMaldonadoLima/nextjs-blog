import ImageAndDescription from "@/components/ImageAndDescription";

export default function Home() {
  return (
		<>
			<div className="flex-col w-full h-auto justify-center px-4 sm:px-32 lg:px-56 py-8 text-lightText dark:text-darkText">
				<span className="w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText mb-4">Home</span>
				<div className="py-6">
					<h1 className="w-full mb-2 flex text-primaryPurple dark:text-secondaryPurple text-2xl font-bold text-start">Welcome to my blog!</h1>
					<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra.</span>
				</div>
				<div className="py-6 flex-col">
					<ImageAndDescription 
						index={2}
						title="Post 3"
						date="02/03/2024"
						imageSource={"/astronautImage.png"}/>
					<ImageAndDescription 
					  	index={1}
						title="Post 2"
						date="15/01/2024"
						imageSource={"/keyboardImage.png"}/>
					<ImageAndDescription 
						index={0}
						title="Post 1"
						date="21/11/2023"
						imageSource={"/vrManImage.png"}/>
				</div>
				<span className="w-full justify-center flex font-semibold text-lg text-lightText dark:text-darkText my-4">Home</span>
			</div>
		</>
	)
}
