import Image from "next/image";
const SkeletonRo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Branding = () => {
  const Logo = () => {
    return (
      <Image
        src="/illustrations/Logo.png"
        width={40}
        height={40}
        alt="Picture of the author"
      />
    );
  };
  return <div>Branding </div>;
};
export default Branding;
