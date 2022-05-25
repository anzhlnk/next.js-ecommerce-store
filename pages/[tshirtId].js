import Image from 'next/image';
import { useRouter } from 'next/router';
import { tshirtDataBase } from '../util/database';

export default function Tshirt(props) {
  // const router = useRouter();
  // const { tshirtId } = router.query;

  return (
    <div>
      <Image
        src={`/${props.tshirt.id}.jpg`}
        alt="girl with white shirt"
        width="392"
        height="588"
      />
      <h1>{props.tshirt.id}</h1>
      <h1>shirt color: {props.tshirt.color}</h1>
      <h1>category: {props.tshirt.category}</h1>
    </div>
  );
}

export function getServerSideProps(context) {
  console.log(context.query);
  const tshirtId = context.query.tshirtId;
  const foundtshirt = tshirtDataBase.find((tshirt) => {
    return tshirt.id === tshirtId;
  });

  if (!foundtshirt) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      // tshirtId: context.query.tshirtId,
      tshirt: foundtshirt,
    },
  };
}
