import "./ContentList.scss"

export const ContentList = ({contentList, categories}) => {
  return (
    <section className="content-list">
             {categories.map((category) => {
            return (
              <h2
                key={categories.indexOf(category)}
                className="content-list__heading"
              >
                Today in {category};
              </h2>
            );
          })}
      </section>
    
  )
}
