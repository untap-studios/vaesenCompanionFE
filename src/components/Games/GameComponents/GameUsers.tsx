import { GameTypes } from "../../../types/game";

export default function GameUsers({ gameData }: {gameData: GameTypes | null}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      {gameData?.users &&
        gameData.users.map((user) => (
          <div key={user?._id}>
            <img
              style={{
                maxWidth: "50px",
                maxHeight: "50px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={user?.imageUrl || "https://picsum.photos/200/200"}
              alt={user?.name}
              />
              <p>{user?.name}</p>
          </div>
        ))}
    </div>
  );
}
