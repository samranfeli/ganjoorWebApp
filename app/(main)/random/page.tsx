import RandomPoem from "@/components/random/random-poem";
import Container from "@/components/ui/container";

export default function Random() {
  return (
    <Container className="flex flex-col items-center gap-5 justify-between h-full grow py-8">
      <RandomPoem />
    </Container>
  );
}
