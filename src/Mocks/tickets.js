//mock data


export let ticketsData = [];
for (let i = 0; i < 5; i++) {
  let status = "";
  const randomStatus = Math.floor(Math.random() * 3) + 1;
  if (randomStatus === 1) {
    status = "new";
  } else if (randomStatus === 2) {
    status = "closed";
  } else {
    status = "active";
  }

  ticketsData.push({
    id: i,
    subject: "ticket" + i,
    priority: Math.floor(Math.random() * 3) + 1,
    status: status,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, placeat!",
  });
}

