type OptionsCrudProps = {
  data: OptionType[];
};

export function OptionsCrud({ data }: OptionsCrudProps) {
  return (
    <div>
      {data.map((option) => {
        return <div key={option.value}>{option.text}</div>;
      })}
    </div>
  );
}
