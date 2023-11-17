import { FC } from 'react';
import { IJokesItem } from '../../types';
import { AnimatePresence, motion } from 'framer-motion';

const JokesItem: FC<IJokesItem> = ({ value }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="border border-1 rounded rounded-3 py-3 px-3 mb-3 align-self-stretch overflow-hidden"
      >
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.25 }}
          className="text text-black"
        >
          {value}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};
export default JokesItem;
