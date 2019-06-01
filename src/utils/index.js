export function mapValue(value, fromStart, fromEnd, toStart, toEnd) {
  return toStart + (value - fromStart) * (toEnd - toStart) / (fromEnd - fromStart);
}

export function capitalize(value) {
  const valueString = String(value);
  return valueString.substring(0, 1).toUpperCase() + valueString.substring(1).toLowerCase()
}

export function buildProfileIconSrc(riotData) {
  return `http://ddragon.leagueoflegends.com/cdn/${riotData.cdnVersion}/img/profileicon/${riotData.summonerData.profileIconId}.png`;
}

const tierNumber = {
  'I': 1,
  'II': 2,
  'III': 3,
  'IV': 4,
};

export function getTierNumber(tier) {
  return tierNumber[tier] || 1;
}

export function buildLeagueIconSrc(riotData) {
  const rankString = String(riotData.entryData.rank).toLowerCase();
  const tierNumber = getTierNumber(riotData.entryData.tier);

  return `${process.env.PUBLIC_URL}img/${rankString}_${tierNumber}.png`;
}
