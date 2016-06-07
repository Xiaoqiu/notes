# Ajax events

These events are fired during the lifecycle of an Ajax request performed with the default setting of global: true:

- ajaxStart (global): fired if no other Ajax requests are currently active
- ajaxBeforeSend (xhr, options): before sending the request; can be cancelled
- ajaxSend (xhr, options): like ajaxBeforeSend, but not cancellable
- ajaxSuccess (xhr, options, data): when the response is success
- ajaxError (xhr, options, error): when there was an error
- ajaxComplete (xhr, options): after request has completed, regardless of error or success
- ajaxStop (global): fired if this was the last active Ajax request
