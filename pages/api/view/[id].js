import { Deta } from "deta";

const deta = Deta(process.env.DETA_KEY);

const base = deta.Base(process.env.DETA_BASE);

const view = async (req, res) => {
  const { id } = req.query;
  await base.put({ id: id });
  const resp = await base.fetch();
  const views = resp.items.filter((response) => response.id === id);
  res.status(200).json({ views: views.length });
};

export default view;
