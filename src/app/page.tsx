import ImageAndDescription from "@/components/ImageAndDescription";

export default function Home() {
  return (
		<>
			<div className="flex-col w-full h-auto justify-center px-56 py-8 text-lightText dark:text-darkText">
				<div className="py-6">
					<h1 className="w-full mb-2 flex text-xl font-bold text-start">Welcome to my blog!</h1>
					<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra.</span>
				</div>
				<div className="py-6 flex-col space-y-12">
					<ImageAndDescription imageSource={"/astronautImage.png"}/>
					<ImageAndDescription imageSource={"/keyboardImage.png"}/>
					<ImageAndDescription imageSource={"/vrManImage.png"}/>
				</div>
			</div>
		</>
	)
}
