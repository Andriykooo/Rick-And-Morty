import { loadLocationData } from '../../src/api/Location/LocationReposittory';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';

import Location from '../../src/pages/CharacterLocation/CharacterLocation';

export const getStaticPaths: GetStaticPaths = async () => {
  const locations = await loadLocationData.getAllLocations();
  const paths = locations.map((location) => {
    return {
      params: { locationId: location.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const locationId = context.params.locationId;
  const location = await loadLocationData.getCharacterLocation(+locationId);

  return {
    props: { location },
  };
};

export default Location;
