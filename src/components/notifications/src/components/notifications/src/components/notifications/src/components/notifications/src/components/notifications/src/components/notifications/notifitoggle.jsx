"use client"; // safe for Next.js, harmless in plain React

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * NotificationList Component
 * Props:
 *  - notifications: array of { message: string, timestamp: string }
 *
 * Example:
 *  <NotificationList
 *      notifications={[
 *          { message: "New message from John", timestamp: "2 min ago" },
 *          { message: "Server restarted", timestamp: "10 min ago" }
 *      ]}
 *  />
 */
export default function NotificationList({ notifications = [] }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md w-full max-w-md transition-colors">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Recent Notifications
        </h2>
        <button
          onClick={toggleVisibility}
          className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>

      {/* Notifications List */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {notifications.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No notifications available.
              </p>
            ) : (
              <ul className="space-y-3">
                {notifications.map((note, idx) => (
                  <li
                    key={`${note.timestamp}-${idx}`}
                    className="border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      {note.message}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {note.timestamp}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
