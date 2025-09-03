import SkeletonCard from "../../../shared/components/SkeletonCard";

const LoadingUsers = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </>
  );
};

export default LoadingUsers;
