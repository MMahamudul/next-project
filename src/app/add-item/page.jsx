import AddItemForm from '@/components/AddItemForm'

export default function AddItemPage() {
  // Route is already protected by middleware
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center text-blue-900">Add New Product</h1>
      <p className="mt-2  text-center text-blue-800">
        Fill in the details below to add a new item to the store.
      </p>

      <div className="mt-8">
        <AddItemForm />
      </div>
    </main>
  )
}
