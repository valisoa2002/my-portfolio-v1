import Reveal from '../ui/Reveal'
import StatCard from '../ui/StatCard'

export default function Stats({ stats }) {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((item) => <StatCard key={item.label} item={item} />)}
        </Reveal>
      </div>
    </section>
  )
}
