(ns frontend-robot.prod
  (:require
    [frontend-robot.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
