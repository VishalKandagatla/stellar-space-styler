
interface CTAContentProps {
  title: string;
  description: string;
}

const CTAContent = ({ title, description }: CTAContentProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default CTAContent;
