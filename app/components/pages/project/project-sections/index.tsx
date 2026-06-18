import Image from "next/image"

const sections = [
    {
        title: 'Login',
        image: 'https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg'
    },
    {
        title: 'Home',
        image: 'https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg'
    }


]

export const ProjectSections = () => {
    return (
        <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
            {sections.map(section => (
                <div key={section.title} className="flex flex-col items-center gap-6 md:gap-12">
                    <h2 className="text-2xl md:text-3xl">
                        {section.title}
                    </h2>
                    <Image
                    src={section.image}
                    width={1080}
                    height={672}
                    className="w-full aspect-auto rounded-lg object-cover"
                    alt={`Imagem da seção ${section.title}`}
                    unoptimized
                    />
                </div>
            ))}
        </section>
    )
}