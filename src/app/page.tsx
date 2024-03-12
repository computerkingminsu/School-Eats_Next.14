import Banner from '@/components/unit/home/banner/Banner';
import CommunityCard from '@/components/unit/home/communitycard/CommunityCard';
import FoodQuration from '@/components/unit/home/foodquration/FoodQuration';
import MapButton from '@/components/unit/home/mapbutton/MapButton';
import YoutubeBanner from '@/components/unit/home/youtubebanner/YoutubeBanner';

export default function HomePage() {
  return (
    <>
      <Banner />
      <YoutubeBanner />
      <FoodQuration />
      <MapButton />
      <CommunityCard />
    </>
  );
}
