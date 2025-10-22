type OptionType = {
  text: string;
  value: string;
  iconName: IconName;
};

type LinkedOptionType = {
  text: string;
  value: string;
  iconName: IconName;
  linkedOptionId: string | null;
};

type ServerCtxType = {
  id: number;
};
