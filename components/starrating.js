function EmptyStars({ list, stargap = 0.3, key }) {
  let emptyStars = 0;

  if (list.rating === "0") {
    emptyStars = 5;
  } else if (list.rating === "1") {
    emptyStars = 4;
  } else if (list.rating === "2") {
    emptyStars = 3;
  } else if (list.rating === "3") {
    emptyStars = 2;
  } else if (list.rating === "4") {
    emptyStars = 1;
  } else if (list.rating === "5") {
    emptyStars = 0;
  }

  const secondDataList = Array.from({ length: emptyStars }, () => {
    if (list.rating <= 5) {
      return (
        <svg
          key={key}
          height="30"
          width="30"
          style={{ margin: `0rem ${stargap} 0.5rem ${stargap}` }}
        >
          <path
            d="M 18 10 C 15 1 15 1 12 10 C 1 9 1 9 10 15 C 5 26 5 26 15 18 C 25 26 25 26 20 15 C 30 9 30 9 18 10"
            style={{ fill: "none", strokeWidth: "2", stroke: "#ffc83d" }}
          />
        </svg>
      );
    }
  });

  return secondDataList;
}

function StarsMap({ list, stargap = 0.3, key }) {
  const dataList = Array.from({ length: list.rating }, () => {
    if (list.rating <= 5) {
      return (
        <svg
          key={key}
          height="30"
          width="30"
          style={{ margin: `0rem ${stargap} 0.5rem ${stargap}` }}
        >
          <path
            d="M 18 10 C 15 1 15 1 12 10 C 1 9 1 9 10 15 C 5 26 5 26 15 18 C 25 26 25 26 20 15 C 30 9 30 9 18 10"
            style={{ fill: "#ffc83d", strokeWidth: "2", stroke: "#ffc83d" }}
          />
        </svg>
      );
    }
  });
  return dataList;
}

export default function Skills({
  list,
  className,
  color,
  stargap,
  size,
  textTransform,
  key,
}) {
  return (
    <div className={className} key={key}>
      <h1
        style={{
          color: color,
          fontSize: `${size}px`,
          textTransform: textTransform,
        }}
        className="font-normal mb-1  "
      >
        {list.SkillName}
      </h1>
      <div className="flex">
        <StarsMap key={key} list={list} stargap={stargap} />
        <EmptyStars key={key} list={list} stargap={stargap} />
      </div>
    </div>
  );
}
