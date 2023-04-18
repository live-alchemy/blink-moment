import Image from "next/image";

export default function Bio({
  person,
  avatar,
  bio,
  birthdate,
  birthplace,
}: {
  person: string;
  avatar: string;
  bio: string;
  birthdate: string;
  birthplace: string;
}) {
  return (
    <div>
      <Image
        alt="chart owner image"
        src={avatar}
        width={300}
        height={48}
        className="rounded-full"
      />
      <h4 className="text-xl font-semibold">Name: {person}</h4>
      <h6>Bio: {bio}</h6>
      <h6>Birthdate: {birthdate}</h6>
      <h6>Birth Place: {birthplace}</h6>
    </div>
  );
}
