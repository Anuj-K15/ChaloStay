import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import Loader from "@/app/components/Loader";

const Loading = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto pt-8">
        <Heading title="Profile" subtitle="Update your personal information" />
        <div className="flex justify-center items-center h-[60vh]">
          <Loader />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
