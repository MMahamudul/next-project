import Image from "next/image"

export default async function ItemDetail({ params }) {
  const res = await fetch(`http://localhost:5000/items/${params.id}`)
  const item = await res.json()

  return (
    <div className="p-10">
      <h1>{item.name}</h1>
      <Image src={item.image} alt="Photos"/>
      <p>{item.description}</p>
    </div>
  )
}

