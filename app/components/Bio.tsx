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
    <div className="grid grid-cols-9">
      <div className="col-span-6 col-start-4">
        <Image
          alt="chart owner image"
          src={avatar}
          width={300}
          height={48}
          className="rounded-full"
        />
      </div>
      <div className="col-span-2 col-start-4 text-center">
        <h4 className="text-xl font-semibold">{person}</h4>
      </div>
      <div className="col-span-3" />

      <div className="col-span-2">
        <strong>Birthdate</strong>
      </div>
      <div className="col-span-7">{birthdate}</div>

      <div className="col-span-2">
        <strong>Birth Place</strong>
      </div>
      <div className="col-span-7">{birthplace}</div>

      <div className="col-span-2">
        <strong>Bio</strong>
      </div>
      <div className="col-span-7">{bio}</div>
    </div>
  );
}
