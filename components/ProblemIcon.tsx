import {
  FileText,
  PoundSterling,
  Users,
  ShieldAlert,
  Gavel,
  Mail,
  Search,
  Edit,
  AlertTriangle,
  Landmark,
  EyeOff,
  FileSearch,
  Home,
  HardHat,
  Utensils,
  ShoppingBag,
  Car,
  Stethoscope,
  Store,
  Palette,
  Sprout,
  HeartPulse,
  BookOpen,
  Globe,
  TrendingUp,
  Building2,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/types";

const iconMap: Record<IconName, typeof FileText> = {
  "file-text": FileText,
  receipt: PoundSterling,
  users: Users,
  "shield-alert": ShieldAlert,
  gavel: Gavel,
  mail: Mail,
  search: Search,
  edit: Edit,
  "alert-triangle": AlertTriangle,
  landmark: Landmark,
  "eye-off": EyeOff,
  "file-search": FileSearch,
  home: Home,
  "hard-hat": HardHat,
  utensils: Utensils,
  "shopping-bag": ShoppingBag,
  car: Car,
  stethoscope: Stethoscope,
  store: Store,
  palette: Palette,
  sprout: Sprout,
  "heart-pulse": HeartPulse,
  "book-open": BookOpen,
  globe: Globe,
  "trending-up": TrendingUp,
  "building-2": Building2,
};

type Props = LucideProps & { name: IconName };

export default function ProblemIcon({ name, ...props }: Props) {
  const Icon = iconMap[name];
  return <Icon {...props} />;
}
