// import Link from "next/link"
 
// const EditButton = async({slug}: {slug: string})=> {
//     <Link className ="button-secondary" href={`/${slug}/edit`}/>
// }
 
// export default EditButton

























// import Link from "next/link";

// type EditButtonProps = {
//   slug: string;
// };

// const EditButton = ({ slug }: EditButtonProps) => {
//   return (
//     <Link
//       className="button-secondary"
//       href={`/${slug}/edit`}
//     >
//       Edit
//     </Link>
//   );
// };

// export default EditButton;



import Link from "next/link";

type EditButtonProps = {
  slug: string;
};

const EditButton = ({ slug }: EditButtonProps) => {
  return (
    <Link
      className="
        button-teritary
        px-4 py-2 
        lg:px-8
        w-full 
        sm:w-auto 
        text-center
      "
      href={`/${slug}/edit`}
    >
      Edit
    </Link>
  );
};

export default EditButton;

