export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export enum CommunityType {
  History = 'History',
  Food = 'Food',
  Pets = 'Pets',
  Health = 'Health',
  Fashion = 'Fashion',
  Exercise = 'Exercise',
  Others = 'Others',
}

export interface OptionProps {
  id: any;
  label: any;
}
