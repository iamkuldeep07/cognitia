import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  ExternalLink,
  Tag,
  Sparkles,
  Zap,
} from "lucide-react";

const merchItems = [
  {
    id: "tshirt",
    name: "Cognitia 2K25 Official T-Shirt",
    price: "₹399",
    features: [
      "Premium 100% Cotton Blend",
      "Neon-grid signature back print",
      "Minimalist front logo",
      "Breathable for long hackathons",
    ],
    sizes: "S, M, L, XL, XXL",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    badge: "Best Seller",
  },
  {
    id: "hoodie",
    name: "Cognitia Premium Hoodie",
    price: "₹799",
    features: [
      "Heavy-blend 300GSM fleece",
      "Oversized streetwear fit",
      "Custom metal aglets",
      "Glow-in-the-dark embroidery",
    ],
    sizes: "M, L, XL",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    badge: "Limited Edition",
  },
];

const Merch = () => {
  const googleFormLink = "https://forms.gle/YOUR_FORM_LINK_HERE";

  return (
    <div className="min-h-screen bg-[#020202] text-white py-24 px-6 relative overflow-hidden flex flex-col items-center">

      {/* 🔥 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff0a_1px,transparent_1px),linear-gradient(to_bottom,#00ffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* ⚡ GLOW ORBS */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full"
      />

      <div className="max-w-7xl w-full relative z-10">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-sm uppercase text-gray-300">
              Exclusive Drop
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Gear Up For <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cognitia 2K25
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Premium tech fest merch. Limited stock. Built for hackers,
            builders & innovators.
          </p>
        </div>

        {/* 🔥 PRODUCTS */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
              className="relative group rounded-3xl overflow-hidden"
            >
              {/* ⚡ NEON BORDER */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-40 group-hover:opacity-100 blur-sm"></div>

              <div className="relative bg-[#050505] rounded-3xl overflow-hidden">

                {/* ⚡ SCANLINES */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(255,255,255,0.02)_3px)] pointer-events-none"></div>

                <div className="flex flex-col md:flex-row">

                  {/* IMAGE */}
                  <div className="relative w-full md:w-2/5 h-72 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      variants={{
                        hover: { scale: 1.15 },
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                    />

                    {/* GLITCH EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent,rgba(0,255,255,0.2),transparent)] animate-glitch"></div>
                  </div>

                  {/* DETAILS */}
                  <div className="p-8 w-full md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {item.name}
                      </h2>

                      <div className="text-3xl font-black mb-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
                        {item.price}
                      </div>

                      <ul className="space-y-3 mb-6 text-gray-300 text-sm">
                        {item.features.map((f, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-cyan-400">▸</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-sm bg-white/5 px-4 py-2 rounded-xl border border-white/10 w-fit">
                      Sizes: {item.sizes}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to claim your gear?
          </h3>

          <p className="text-gray-400 mb-10">
            Limited stock. Secure yours now.
          </p>

          <motion.a
            href={googleFormLink}
            target="_blank"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-12 py-5 text-lg font-bold text-cyan-400 border border-cyan-400 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition"></span>

            <ShoppingBag size={22} />
            INITIATE PURCHASE
            <ExternalLink size={20} />

            <span className="absolute inset-0 rounded-full blur-xl bg-cyan-400/20 opacity-0 group-hover:opacity-100"></span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Merch;