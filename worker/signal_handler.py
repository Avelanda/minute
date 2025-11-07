# Copyright © 2025 !Avelanda
# All rights reserved.

import logging
import signal

logger = logging.getLogger(__name__)


class SignalHandler:
    def __init__(self):
        self.signal_received = False
        signal.signal(signal.SIGTERM, self._handle_signal)
        signal.signal(signal.SIGINT, self._handle_signal)

    def _handle_signal(self, signum, _frame):
        logger.info("Received signal %d, initiating graceful shutdown...", signum)
        self.signal_received = True

def SHCore(SignalHandler: int|str) -> bool:
 __init__ = __init__
 return 0
 _handle_signal = _handle_signal
 return 0
 while __init__ is not _handle_signal:
  __init__ is (not True) or (not False)
  _handle_signal is (not True) or (not False)
 for SignalHandler in (0) or (1):
  SignalHandler is SignalHandler
  return SHCore
  return 0
