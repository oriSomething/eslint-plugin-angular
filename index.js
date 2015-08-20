(function(){
      'use strict';

      module.exports = {
            rules: {
                  'ng_angularelement': require('./rules/ng_angularelement'),
                  'ng_controller_as': require('./rules/ng_controller_as'),
                  'ng_controller_as_route': require('./rules/ng_controller_as_route'),
                  'ng_controller_as_vm': require('./rules/ng_controller_as_vm'),
                  'ng_controller_name': require('./rules/ng_controller_name'),
                  'ng_deferred': require('./rules/ng_deferred'),
                  'ng_definedundefined': require('./rules/ng_definedundefined'),
                  'ng_di': require('./rules/ng_di'),
                  'ng_directive_name': require('./rules/ng_directive_name'),
                  'ng_document_service': require('./rules/ng_document_service'),
                  'ng_empty_controller': require('./rules/ng_empty_controller'),
                  'ng_file_name': require('./rules/ng_file_name'),
                  'ng_filter_name': require('./rules/ng_filter_name'),
                  'ng_foreach': require('./rules/ng_foreach'),
                  'ng_function_type': require('./rules/ng_function_type'),
                  'ng_interval_service': require('./rules/ng_interval_service'),
                  'ng_json_functions': require('./rules/ng_json_functions'),
                  'ng_module_getter': require('./rules/ng_module_getter'),
                  'ng_module_name': require('./rules/ng_module_name'),
                  'ng_module_setter': require('./rules/ng_module_setter'),
                  'ng_no_angular_mock': require('./rules/ng_no_angular_mock'),
                  'ng_no_cookiestore': require('./rules/ng_no_cookiestore'),
                  'ng_no_digest': require('./rules/ng_no_digest'),
                  'ng_no_jquery_angularelement': require('./rules/ng_no_jquery_angularelement'),
                  'ng_no_private_call': require('./rules/ng_no_private_call'),
                  'ng_no_services': require('./rules/ng_no_services'),
                  'ng_no_service_method': require('./rules/ng_no_service_method'),
                  'ng_on_watch': require('./rules/ng_on_watch'),
                  'ng_rest_service': require('./rules/ng_rest_service'),
                  'ng_service_name': require('./rules/ng_service_name'),
                  'ng_timeout_service': require('./rules/ng_timeout_service'),
                  'ng_typecheck_array': require('./rules/ng_typecheck_array'),
                  'ng_typecheck_date': require('./rules/ng_typecheck_date'),
                  'ng_typecheck_function': require('./rules/ng_typecheck_function'),
                  'ng_typecheck_number': require('./rules/ng_typecheck_number'),
                  'ng_typecheck_object': require('./rules/ng_typecheck_object'),
                  'ng_typecheck_regexp': require('./rules/ng_typecheck_regexp'),
                  'ng_typecheck_string': require('./rules/ng_typecheck_string'),
                  'ng_watchers_execution': require('./rules/ng_watchers_execution'),
                  'ng_window_service': require('./rules/ng_window_service')
            },
            rulesConfig: {
                  'ng_angularelement': 1,
                  'ng_controller_as': 2,
                  'ng_controller_as_route': 2,
                  'ng_controller_as_vm': [2, 'vm'],
                  'ng_controller_name': [2, /[A-Z].*Controller$/],
                  'ng_deferred': 0,
                  'ng_definedundefined': 2,
                  'ng_di': [2, 'function'],
                  'ng_directive_name': 0,
                  'ng_document_service': 2,
                  'ng_empty_controller': 0,
                  'ng_foreach': 0,
                  'ng_file_name': 0,
                  'ng_filter_name': 0,
                  'ng_function_type': 0,
                  'ng_interval_service': 2,
                  'ng_json_functions': 2,
                  'ng_module_getter': 2,
                  'ng_module_name': 0,
                  'ng_module_setter': 2,
                  'ng_no_angular_mock': 0,
                  'ng_no_cookiestore': 2,
                  'ng_no_digest': 0,
                  'ng_no_jquery_angularelement': 2,
                  'ng_no_private_call': 2,
                  'ng_no_services': [2, ['$http', '$resource', 'Restangular', '$q']],
                  'ng_no_service_method': 2,
                  'ng_on_watch': 2,
                  'ng_rest_service': 0,
                  'ng_service_name': 0,
                  'ng_timeout_service': 2,
                  'ng_typecheck_array': 2,
                  'ng_typecheck_date': 2,
                  'ng_typecheck_function': 2,
                  'ng_typecheck_number': 2,
                  'ng_typecheck_object': 2,
                  'ng_typecheck_regexp': 2,
                  'ng_typecheck_string': 2,
                  'ng_watchers_execution': [0, '$destroy'],
                  'ng_window_service': 2
            }
      };
})();
