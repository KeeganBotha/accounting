type OptionType = {
  text: string;
  value: string;
  iconName: IconName;
};

type LinkedOptionType = {
  text: string;
  value: string;
  iconName: IconName;
  linkedOptionId: number | null;
};

type ServerCtxType = {
  id: number;
};
